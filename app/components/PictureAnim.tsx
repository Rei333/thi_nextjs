"use client";

import Image from "next/image";
import { useState, useEffect } from 'react';

export default function PictureAnim({img, alt}: {img: string, alt: string}) {
	const [hero_width, set_width] = useState(50);

	// anim

	return (
        <div style={{ width: `${hero_width}%` }} className="relative">
            <Image src={img} alt={alt} fill className="object-cover" />
		</div>
	);
}