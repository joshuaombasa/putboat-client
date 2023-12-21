import React from "react";
import { useOutletContext } from "react-router-dom";

export default function SelectedMerchantBoatPhotos() {

    const { selectedMerchantBoat } = useOutletContext()

    return (
        <div className="selected-merchant-boat-photos">
            <img src={selectedMerchantBoat.imageUrl} alt="" />
        </div>
    )
}