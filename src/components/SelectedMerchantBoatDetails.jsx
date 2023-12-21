import React from "react";
import { useOutletContext } from "react-router-dom";

export default function SelectedMerchantBoatDetails() {

    const { selectedMerchantBoat } = useOutletContext()

    return (
        <div className="selected-merchant-boat-details">
            <p><strong>Name: </strong>{selectedMerchantBoat.name}</p>
            <p><strong>Category: </strong>{selectedMerchantBoat.type}</p>
            <p><strong>Description: </strong>{selectedMerchantBoat.description}</p>
        </div>
    )
}