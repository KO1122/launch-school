# Practice Problems - Factory Functions

1. The two disadvantages of working with factory functions is that each object created by the factory function has its own copy of all methods and there is no way to identify which factory function created an object.

2.

```javascript
function makeObj() {
  return {
    propA: 10,
    propB: 20,
  };
}
```

3.

```javascript
function createInvoice(services) {
  return Object.assign(
    {
      phone: 3000,
      internet: 5500,
      total() {
        return this.phone + this.internet;
      },
    },
    services
  );
}
```

4.

```javascript
function createPayment(services) {
  return Object.assign(
    {
      phone: 0,
      internet: 0,
      total() {
        if (this.amount !== undefined) return this.amount;
        return this.phone + this.internet;
      },
    },
    services
  );
}
```

5.

```javascript
function createInvoice(services) {
  return Object.assign(
    {
      phone: 3000,
      internet: 5500,
      totalPayment: 0,
      total() {
        return this.phone + this.internet;
      },
      paymentTotal(payments) {
        return payments.reduce((sum, payment) => sum + payment.total(), 0);
      },
      addPayment(payment) {
        this.totalPayment += payment.total();
      },
      addPayments(payments) {
        this.totalPayment += this.paymentTotal(payments);
      },
      amountDue() {
        return this.total() - this.totalPayment;
      },
    },
    services
  );
}
```
