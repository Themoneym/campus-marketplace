module.exports = {
  providers: {
    local: ['MTN_MOMO', 'VODAFONE_CASH', 'AIRTELTIGO_MONEY', 'EXPRESSPAY', 'SLYDEPAY', 'ZEEPAY', 'GH_LINK', 'VISA', 'MASTERCARD'],
    international: ['PAYPAL', 'STRIPE'],
  },
  receipts: {
    channels: ['email', 'sms'],
    realtimeConfirmation: true,
  },
};
