import { productActionType } from "./ActionType";



const initialState = {

    name: 'Sohel Rana',
    card: [],

}

const ProducrReducer = (state = initialState, action) => {

    const selectedProduct = state.card.find((v) => v.id === action.payload.id);






    switch (action.type) {
        case productActionType.ADD_TO_PRODUCT:

            if (selectedProduct) {

                const filterProduct = state.card.filter((v) => v.id !== selectedProduct.id)

                selectedProduct.quentity = selectedProduct.quentity + 1


                return {
                    ...state,
                    card: [...filterProduct, selectedProduct]
                }
            }

            return {
                ...state,

                card: [...state.card, { ...action.payload, quentity: 1 }]
            }

        case productActionType.REMOVE_PRODUCT:

            console.log(selectedProduct.quentity);


            if (selectedProduct.quentity > 1) {

                const filterProduct = state.card.filter((v) => v.id !== selectedProduct.id)

                selectedProduct.quentity = selectedProduct.quentity - 1


                return {
                    ...state,
                    card: [...filterProduct, selectedProduct]
                }
            }


            return {

                ...state,
                card: state.card.filter((v) => v.id !== action.payload.id)

            }

        default:
            return state;
    }


}

export default ProducrReducer;