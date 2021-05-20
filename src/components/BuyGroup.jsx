import React from 'react';

import { calculateDiscountedPrice } from '../js/utils/DerivedCalculations';
import '../css/BuyGroup.scss';

function BuyGroup(props) {

    const game = props.game;
    let additionalBuyGroupClass = "";
    if(props.isOnGamePage){
        additionalBuyGroupClass= " price-layout-override"; //mind the space
    }

    return (
        <div>
            {
                game.is_free ?
                    <div className="buy-group">
                        <div>Free!</div>
                    </div>    
                :
                    <div className={ "buy-group" + additionalBuyGroupClass }>
                        {
                            game.discount_percent > 0 ? 
                                <p className="strikethrough-price">
                                    ${ game.price }
                                </p>
                            :
                                <div></div>  
                        }
                        <h6 className="actual-price">
                            ${ calculateDiscountedPrice(game.price, game.discount_percent).toFixed(2) }
                        </h6>
                    </div> 
            }
        </div>
    )
}

export default BuyGroup;
