class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = '${this.firstName} ${this.lastName}';
    this.email = email;
  }
  checkLastOnline() {
    console.log(`${this.fullName} was last online at ${Date.now()}`);
  }

  sendEmail() {
    console.log(`Email sent to ${email}`);
  }

  delete() {
    console.log('User removed');
  }
}

const user = new User('John', 'Doe', 'john@doe.com');

const user2 = User('Jane', 'Doe', 'jane@doe.com');

console.log(user, user2);
