export function searchNow(key) {
    return new Promise((resolve, reject) => {
        const users = [
            {
                id: '232',
                checkNo: 'Check# 1111213',
                account: '637846598230',
                amount: '$10.00',
                eob: 'Yes',
                date: '4 Dec 2018'
            }, {
                id: '452',
                checkNo: 'Check# 3278964',
                account: '637846598230',
                amount: '$790.00',
                eob: 'No',
                date: '8 Dec 2018'
            }
        ]
        setTimeout(() => resolve(users), 1000)
    });
}

export function createTwentyFourSevenService(key) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({
            id: 'id',
            checkNo: 'checkNo',
            account: 'account',
            amount: 'amount',
            eob: 'eob',
            date: 'date'
        }), 1000)
    });
}

export function updateCreateSibelService(key) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({
            id: 'id',
            checkNo: 'checkNo',
            account: 'account',
            amount: 'amount',
            eob: 'eob',
            date: 'date'
        }), 1000)
    });
}

export function signInService(key) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({firstName: 'Maninder', lasstName: 'Dhanju'}), 1000)
    });
}

export function resetService(key) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({status: 'success'}), 1000)
    });
}
