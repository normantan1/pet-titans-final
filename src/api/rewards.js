const rewards = [
    { id: 1, name: 'GV voucher', points: 200, description: "$50 voucher", image: require("../assets/GV.png") },
    { id: 2, name: 'GV voucher', points: 200, description: "$50 voucher", image: require("../assets/GV.png") },
    { id: 3, name: 'GV voucher', points: 200, description: "$50 voucher", image: require("../assets/GV.png") },
    { id: 4, name: 'GV voucher', points: 400, description: "$100 voucher", image: require("../assets/GV.png") },
    { id: 5, name: 'GV voucher', points: 400, description: "$100 voucher", image: require("../assets/GV.png") },
    { id: 6, name: 'GV voucher', points: 400, description: "$100 voucher", image: require("../assets/GV.png") },
    { id: 7, name: 'GV voucher', points: 400, description: "$100 voucher", image: require("../assets/GV.png") },
    { id: 8, name: 'GV voucher', points: 400, description: "$100 voucher", image: require("../assets/GV.png") },
];

export const getRewardList = () => rewards

export const getReward = (i) => {
    for (const r in rewards) if (r.id == i) return r;
    return rewards[0];
}

