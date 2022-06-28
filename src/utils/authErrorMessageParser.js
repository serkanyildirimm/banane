export default function(errorCode){
    switch (errorCode) {
        case 'auth/invalid-email':
            return 'gecersiz e-posta adresi'

        // case 'auth/email-already-exists':
        //     return 'kullanici mevcut'

        case 'auth/user-not-found':
            return 'kullanici bulunamadi.e-postanızı veya sifrenizi kontrol ediniz.'
        case 'auth/email-already-in-use':
            return 'kullanici var.'
        case 'auth/wrong-password':
            return 'kullanici bulunamadi.e-postanızı veya sifrenizi kontrol ediniz.'
        case 'auth/weak-password':
            return 'lutfen daha uzun bir parola belirleyiniz...'
    
        default:
            return errorCode;
    }
}