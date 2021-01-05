import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCWwhmlfNsYkcASJWEREqkIvQtkTZhA1NY",
    authDomain: "crwn-ecommerce-51b2f.firebaseapp.com",
    projectId: "crwn-ecommerce-51b2f",
    storageBucket: "crwn-ecommerce-51b2f.appspot.com",
    messagingSenderId: "278346471159",
    appId: "1:278346471159:web:dc531cb12e231d1eeee5f2",
    measurementId: "G-LB9D54691T",
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const createProfileDocument = async (user, other) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const userState = await userRef.get();
    if (!userState.exists) {
        try {
            userRef.set({
                displayName: user.displayName,
                email: user.email,
                createdAt: new Date(),
                ...other,
            });
        } catch (e) {
            console.log("failed to sign up user: ", e);
        }
    }
    return userRef;
};

//creates a new collection in firestore with a given name and takes collection items as an array in second arugement
export const createCollectionAndDocuments = async (
    collectionName,
    documents
) => {
    const batch = firestore.batch();

    const collectionRef = firestore.collection(collectionName);
    documents.forEach((document) => {
        const newDoc = collectionRef.doc();
        batch.set(newDoc, document);
    });

    return await batch.commit();
};

export const formatCollections = (snapshot) => {
    const formattedData = snapshot.docs.map((doc) => {
        const { title, items } = doc.data();
        return {
            id: doc.id,
            routeName: encodeURI(title.toLowerCase()),
            title,
            items,
        };
    });
    return formattedData.reduce((accumilator, collection) => {
        accumilator[collection.title.toLowerCase()] = collection;
        return accumilator;
    }, {});
};

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
