import React, { useEffect, useRef, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import Slider from 'react-slick';
import Image from 'next/image';

import NextArrow from 'presentation/common/typography/NextArrow';
import PrevArrow from 'presentation/common/typography/PrevArrow';

import { IProduct } from 'domain/interfaces/IProduct';

interface IThumbnailDefault {
	product: IProduct;
	vertical: boolean;
}

const ThumbnailDefault = ({ product, vertical = true }: IThumbnailDefault) => {
	const galleryCarousel = useRef<Slider | null>(null);
	const variantCarousel = useRef<Slider | null>(null);
	const [gallery, setGallery] = useState<any>(null);
	const [variant, setVariant] = useState<any>(null);
	const [isOpen, setIsOpen] = useState(false);
	let mainImage = { url: '', isMain: false };
	product.images.map((image) => {
		if (image.isMain) mainImage = image;
	});
	const [photoIndex, setPhotoIndex] = useState(
		product.images.indexOf(mainImage)
	);
	const [productImages, setProductImages] = useState([] as Array<string>);

	const handleOpenLightbox = (e, imageIndex) => {
		e.preventDefault();
		setPhotoIndex(imageIndex);
		setIsOpen(true);
	};

	useEffect(() => {
		let images = [] as Array<string>;
		if (product && product.images.length > 0) {
			product.images.map((item) => {
				images.push(item.url);
			});
			setProductImages(images);
		}
		setGallery(galleryCarousel.current);
		setVariant(variantCarousel.current);
	}, [product]);

	const gallerySetting = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: product.images.indexOf(mainImage),
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />
	};
	const variantSetting = {
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
					dots: false,
					arrows: false,
					vertical: false,
					infinite: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
					dots: false,
					arrows: false,
					vertical: false,
					infinite: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
					dots: false,
					arrows: false,
					vertical: false,
					infinite: false
				}
			}
		]
	};

	//Views
	let lightboxView, variantCarouselView, imagesView, galleryImagesView;
	if (productImages.length > 0) {
		imagesView = productImages.map((item) => (
			<div className="item" key={item}>
				<img src={item} alt={item} />
			</div>
		));
		galleryImagesView = productImages.map((item, index) => (
			<div className="item" key={item}>
				<a href="#" onClick={(e) => handleOpenLightbox(e, index)}>
					<Image
						layout="responsive"
						width={600}
						height={600}
						src={item}
						alt={item}
					/>
				</a>
			</div>
		));
	}
	if (vertical) {
		variantCarouselView = (
			<Slider
				asNavFor={gallery}
				ref={(slider) => (variantCarousel.current = slider)}
				swipeToSlide={true}
				arrows={false}
				slidesToShow={6}
				vertical={true}
				infinite={true}
				focusOnSelect={true}
				{...variantSetting}
				className="ps-product__variants"
			>
				{imagesView}
			</Slider>
		);
	} else {
		variantCarouselView = (
			<Slider
				asNavFor={gallery}
				ref={(slider) => (variantCarousel.current = slider)}
				swipeToSlide={true}
				arrows={false}
				slidesToShow={5}
				slidesToScroll={2}
				rows={1}
				vertical={false}
				{...variantSetting}
				infinite={false}
				focusOnSelect={true}
				className="ps-product__variants"
			>
				{imagesView}
			</Slider>
		);
	}
	if (isOpen) {
		lightboxView = (
			<Lightbox
				mainSrc={productImages[photoIndex]}
				nextSrc={productImages[(photoIndex + 1) % productImages.length]}
				prevSrc={
					productImages[
						(photoIndex + productImages.length - 1) %
							productImages.length
					]
				}
				onCloseRequest={() => {
					setIsOpen(false);
				}}
				onMovePrevRequest={() => {
					setPhotoIndex(
						(photoIndex + productImages.length - 1) %
							productImages.length
					);
				}}
				onMoveNextRequest={() => {
					setPhotoIndex((photoIndex + 1) % productImages.length);
				}}
			/>
		);
	}

	return (
		<div
			className="ps-product__thumbnail"
			data-vertical={vertical ? 'true' : 'false'}
		>
			<figure>
				<div className="ps-wrapper">
					<Slider
						{...gallerySetting}
						ref={(slider) => (galleryCarousel.current = slider)}
						asNavFor={variant}
						className="ps-product__gallery ps-carousel inside"
					>
						{galleryImagesView}
					</Slider>
				</div>
			</figure>
			{variantCarouselView}
			{lightboxView}
		</div>
	);
};

export default ThumbnailDefault;
