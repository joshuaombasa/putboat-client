import React from "react";
import { useOutletContext } from "react-router-dom";

export default function SelectedMerchantBoatPricing() {

    const { selectedMerchantBoat } = useOutletContext()

    return (
        <div className="selected-merchant-boat-pricing">
            <h3>${selectedMerchantBoat.price}/day</h3>
        </div>
    )
}