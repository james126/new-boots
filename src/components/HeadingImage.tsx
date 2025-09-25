import React, { useEffect, useState } from "react";
import { Image } from "react-native";

interface HeadingImageProps {
    parentWidth: number
}

export const HeadingImage = ({ parentWidth } : HeadingImageProps) => {
    const [aspectRatio, setAspectRatio] = useState(1);

    useEffect(() => {
        const img = require("../../assets/feasibility-calculator-transparent.png");
        const assetSource = Image.resolveAssetSource(img);
        Image.getSize(assetSource.uri, (width, height) => {
            setAspectRatio(width / height);
        });
    }, []);

    const imageHeight = parentWidth / aspectRatio;

    return (
        <Image source={require("../../assets/feasibility-calculator-transparent.png")}
        style={{width: parentWidth, height: imageHeight, backgroundColor: "transparent"}} resizeMode="contain"></Image>
    )
}
