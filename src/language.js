export const NotiText = {
  en: {
    ok: 'Ok',
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
    priceError: {
      title: 'Unit Price Error',
      message: 'Unit Price need to be larger than 0',
    },
    stockNoti: {
      title: (remove = false) => {
        return `Stock ${remove ? 'Add' : 'Remove'} `;
      },
      message: (quantity, remove) => {
        return `${quantity} stocks are ${remove ? 'add' : 'Removed'}`;
      },
    },
    changeUnitPrice: {
      title: 'Changing Active Version',
      message: unitPrice => {
        return `${unitPrice} will be set as Active Version`;
      },
    },
    addUnitPrice: {
      message: (unitPrice, name) => {
        return `New Price,${unitPrice}, will add to ${name}`;
      },
    },
  },
  mm: {
    ok: 'သိပါပြီ',
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
    priceError: {
      title: 'စျေးနှုန်းအသစ်ပြဿနာ',
      message: 'စျေးနှုန်းအသစ်သည် သုညထက်ပိုကြီးဖို့ လိုပါတယ်။',
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
    addUnitPrice: {
      message: (unitPrice, name) => {
        return `အသစ်စျေး ${unitPrice}ကို ${name} တွင်ထည့်ပါမည် `;
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
    addNewPrice: 'Add New Price',
  },
  mm: {
    ok: 'ဆက်လုပ်ဆောင်ပါ',
    cancle: 'မလုပ်တော့ပါ',
    login: 'အကောင့်ထဲသိုဝင်ပါ',
    stockSubmit: (remove = false) => {
      return `ကုန်ပစ္စည်း${remove ? 'ထည့်ပါ' : 'ထုတ်ပါ'}`;
    },
    addNewPrice: 'စျေးနှုန်းအသစ်ထည့်ပါ',
  },
};

export const Placeholder = {
  en: {
    product: 'Select Product',
    option: 'Select Option',
    quantity: 'Quantity',
    email: 'Enter Email',
    password: 'Enter Password',
    newPrice: 'New Price',
  },
  mm: {
    product: 'ကုန်ပစ္စည်းကိုရွှေးချယ်ပါ',
    option: 'လုပ်ဆောင်မည့် လုပ်ဆောင်ချက်ကိုရွေးချယ်ပါ',
    quantity: 'အရေအတွက်',
    email: 'အီးမေးလ်ကိုရေးပါ',
    password: 'လျှိဝှက်ကုဒ်နံပါတ်ရေးပါ',
    newPrice: 'စျေးနှုန်းအသစ်',
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
    addNewPrice: 'Add New Price',
    allVersion: 'All Versions',
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
    addNewPrice: 'စျေးနှုန်းအသစ်ထည့်ခြင်း',
    allVersion: 'ဗားရှင်းအားလုံး',
  },
};

export const profile = {
  en: {
    username: 'Username',
    email: 'Email',
    role: 'Role',
    language: 'Language',
    lan: 'English',
  },
  mm: {
    username: 'နာမည်',
    email: 'အီးမေးလ်',
    role: 'အလုပ်အကိုင်',
    language: 'ဘာသာစကား',
    lan: 'မြန်မာ',
  },
};
