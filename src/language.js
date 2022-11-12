export const Error = {
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
  },
  mm: {
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
  },
};

export const Button = {
  en: {
    ok: 'Ok',
    cancle: 'Cancle',
    login: 'Login',
    stockSubmit: (remove = false) => {
      return `${remove ? 'added' : 'Remove'} Stock`;
    },
  },
  mm: {
    ok: 'Ok',
    cancle: 'Cancle',
    login: 'Login',
    stockSubmit: (remove = false) => {
      return `${remove ? 'added' : 'Remove'} Stock`;
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
    product: 'Select Product',
    option: 'Select Option',
    quantity: 'Quantity',
    email: 'Enter Email',
    password: 'Enter Password',
  },
};

export const Text = {
  en: {
    hello: 'Hello!',
    welcome: 'Welcome From',
    totalStockValue: 'Total Stock Value',
    totalReadyMade: 'Total Ready Made Value',
    totalStockIN: 'Total Stock In Value',
    totalStockOUT: 'Total Stock Out Value',
  },
  mm: {
    hello: 'Hello!',
    welcome: 'Welcome From',
    totalStockValue: 'Total Stock Value',
    totalReadyMade: 'Total Ready Made Value',
    totalStockIN: 'Total Stock In Value',
    totalStockOUT: 'Total Stock Out Value',
  },
};

export const headers = {
  en: {
    dashboard: 'Dashboard',
    stock: 'Stock',
    profile: 'Profile',
  },
  mm: {
    dashboard: 'Dashboard',
    stock: 'Stock',
    profile: 'အသုံးပြုသူရဲ့အချက်အလက်',
  },
};
