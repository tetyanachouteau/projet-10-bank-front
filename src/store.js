// store.js a pour but de configurer le store Redux en utilisant Redux Toolkit. 
//Il spécifie quels reducers sont associés à quelles parties de l'état de l'application, 
//et il exporte ensuite le store configuré pour être utilisé dans d'autres parties de l'application

//Une fois le store configuré et exporté - importer dans les composant racine de web - App.js, 
//pour le fournir au web via composant Provider de React Redux.

//La fonction configureStore est appelée pour créer et configurer le store Redux. 
//Elle prend un objet en paramètre, où vous spécifiez les reducers pour chaque slice de l'état.
// cet reducer - authReducer est associé à la clé 'auth'. 

//Cela signifie que cet état spécifique sera géré par le reducer authReducer.

//Ajouter d'autres reducers ou slices selon les besoins de votre application 
//en les associant à différentes clés dans l'objet reducer.

import { configureStore } from '@reduxjs/toolkit'; // Import de la fonction configureStore depuis Redux Toolkit
import authReducer from './slices/authSlice'; // Import du reducer authReducer depuis le fichier authSlice.js


const store = configureStore({
    reducer: {
        auth: authReducer, // Ajout du reducer authReducer au store sous la clé "auth"
        // Ajout d'autres slices ou reducers 
    },
});

export default store;