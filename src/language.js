export const Noti = {
  en: {
    networkError: {
      title: 'Network Error',
      message: 'There is no internet connection',
    },
    quantityError: {
      title: 'Quantity Error',
      message: 'Quantity need to be larger than 0',
    },
    productError: {
      title: 'Product Error',
      message: 'Select Product',
    },
    stockNoti: {
      title: (remove = false) => {
        return `Stock ${remove ? 'Add' : 'Remove'} `;
      },
      message: (quantity, remove) => {
        return `${quantity} stocks are ${remove ? 'add' : 'Removed'}`;
      },
    },
  },
  mm: {
    networkError: {
      title: 'အင်တာနက်ပြဿနာ',
      message: 'အင်တာနက်ချိတ်ဆက်ထားခြင်း မရှိပါ',
    },
    quantityError: {
      title: 'အရေအတွက်ပြဿနာ',
      message: 'အရေအတွက်သည် အနည်းဆုံးတစ်ခုရှိရမည်',
    },
    productError: {
      title: 'ကုန်ပစ္စည်း ပြဿနာ',
      message: 'သင့်လျှော်သောကုန်ပစ္စည်းတစ်ခုကို ရွှေးချယ်ပါ',
    },
    stockNoti: {
      title: (remove = false) => {
        return `ကုန်ပစ္စည်း ${remove ? 'ထည့်ခြင်း' : 'ထုတ်ခြင်း'} `;
      },
      message: (quantity, remove) => {
        return `ကုန်ပစ္စည်း${quantity} ခု ${remove ? 'ထည့်ပါမည်' : 'ထုတ်ပါ'}`;
      },
    },
    changeUnitPrice: {
      title: 'ကုန်စျေးနှုန်းပြောင်းခြင်း',
      message: unitPrice => {
        return `${unitPrice} ကိုလက်ရှိစျေးနှုန်းအဖြစ်ပြောင်းမည်`;
      },
    },
  },
};

export const ButtonText = {
  en: {
    ok: 'Ok',
    cancle: 'Cancle',
    login: 'Login',
    stockSubmit: (remove = false) => {
      return `${remove ? 'added' : 'Remove'} Stock`;
    },
  },
  mm: {
    ok: 'အဆင်ပြေသည်',
    cancle: 'မလုပ်တော့ပါ',
    login: 'အကောင့်ထဲသိုဝင်ပါ',
    stockSubmit: (remove = false) => {
      return `ကုန်ပစ္စည်း${remove ? 'ထည့်ပါ' : 'ထုတ်ပါ'}`;
    },
  },
};

export const Placeholder = {
  en: {
    product: 'Select Product',
    option: 'Select Option',
    quantity: 'Quantity',
    email: 'Enter Email',
    password: 'Enter Password',
  },
  mm: {
    product: 'ကုန်ပစ္စည်းကိုရွှေးချယ်ပါ',
    option: 'လုပ်ဆောင်မည့် လုပ်ဆောင်ချက်ကိုရွေးချယ်ပါ',
    quantity: 'အရေအတွက်',
    email: 'အီးမေးလ်ကိုရေးပါ',
    password: 'လျှိဝှက်ကုဒ်နံပါတ်ရေးပါ',
  },
};

export const HeaderText = {
  en: {
    dashboard: 'Dashboard',
    stock: 'Stock',
    profile: 'Profile',
    hello: 'Hello!',
    welcome: text => {
      return `Welcome From ${text}`;
    },
    totalStockValue: 'Total Stock Value',
    totalReadyMade: 'Total Ready Made Value',
    totalStockIN: 'Total Stock In Value',
    totalStockOUT: 'Total Stock Out Value',
  },
  mm: {
    dashboard: 'Dashboard',
    stock: 'ကုန်အဝင်အထွက်',
    profile: 'Profile',
    hello: 'မဂႅလာပါ!',
    welcome: text => {
      return `${text}ကနေကြိုဆိုပါတယ်`;
    },
    totalStockValue: 'ပစ္စည်းလက်ကျန်တန်ဖိုး',
    totalReadyMade: 'အသင့်လုပ်ပစ္စည်းအတွက်ကုန်ကျငွေ',
    totalStockIN: 'ကုန်ပစ္စည်းအဝင်တန်ဖိုး',
    totalStockOUT: 'ကုန်ပစ္စည်းအထွက်တန်ဖိုး',
  },
};

export const profile = {
  en: {
    username: 'Username',
    email: 'Email',
    role: 'Role',
    language: 'Language',
  },
  mm: {
    username: 'နာမည်',
    email: 'အီးမေးလ်',
    role: 'အလုပ်အကိုင်',
    language: 'Language',
  },
};
