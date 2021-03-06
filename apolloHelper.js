import { gql } from "@apollo/client";
import { client } from "./index";

class apollaHelperClass {
 async testql() { 
   return await client
  .query({
    query:gql`
       query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
    `
  })
  .then(result => console.log(result));};


  TEST_QL = gql`
       query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
    `;

  GOOGLE = "googleId";
  FACEBOOK = "facebookId";
  GET_USER = gql`
    query getUser($id: String) {
      getUser(id: $id) {
        id
        pictureUrl
        firstName
        lastName
      }
    }
  `;
  GET_USER_WITHOUT_AUTH = gql`
    query getUserWithoutAuth($id: String) {
      getUserWithoutAuth(id: $id) {
        id
        pictureUrl
        firstName
        lastName
      }
    }
  `;
  
  //login logic
  LOGIN = gql`
    mutation login($userId: String, $userPassword: String) {
      login(userId: $userId, userPassword: $userPassword) {
        token
        message
      }
    }
  `;

  async login(userId, userPassword) {
    return await client.mutate({
      mutation: this.LOGIN,
      variables: {
        userId,
        userPassword,
      },
    });
  }
  VERFITY_USER_MOBILE = gql`
  mutation verifyUserMobile(
    $id: String 
    $mobileNumber: String
    ){
      verifyUserMobile(
    id: $id
    mobileNumber: $mobileNumber
    ){
      message
    }
    }
  `;
  COMFIRM_USER_MOBILE = gql`
  mutation comfirmUserMobile(
    $user: String 
    $token: String
    $tokenType: String
    ){
      comfirmUserMobile(
    user: $user
    tokenType: $tokenType
    token: $token
    ){
      message
      token
    }
    }
  `;
  //register logic
  REGISTER = gql`
    mutation register(
      $firstName: String
      $middleName: String
      $lastName: String
      $password: String
      $confirmPassword: String
      $address: String
      $mobileNumber: String
      $email: String
    ) {
      register(
        firstName: $firstName
        middleName: $middleName
        lastName: $lastName
        password: $password
        confirmPassword: $confirmPassword
        address: $address
        mobileNumber: $mobileNumber
        email: $email
      ) {
        id
        firstName
        middleName
        lastName
      }
    }
  `;
  SOCIAL_AUTH = gql`
    mutation socialAuth(
      $firstName: String
      $lastName: String
      $socialId: String
      $pictureUrl: String
      $socialMail: String
      $socialType: String
    ) {
      socialAuth(
        firstName: $firstName
        lastName: $lastName
        socialId: $socialId
        pictureUrl: $pictureUrl
        socialMail: $socialMail
        socialType: $socialType
      ) {
        message
        id
        token
      }
    }
  `;
  async register(
    firstName,
    middleName,
    lastName,
    password,
    confirmPassword,
    address,
    mobileNumber,
    email
  ) {
    return await client.mutate({
      mutation: this.REGISTER,
      variables: {
   
        firstName,
        middleName,
        lastName,
        password,
        confirmPassword,
        address,
        mobileNumber,
        email,
      },
    });
  }

  async socialAuth({
    firstName,
    lastName,
    pictureUrl,
    socialId,
    socialType,
    socialMail,
  }) {
    return await client.mutate({
      mutation: this.SOCIAL_AUTH,
      variables: {
        firstName,
        lastName,
        pictureUrl,
        socialId,
        socialType,
        socialMail,
      },
    });
  }
  async getUser(id) {
    return await client.query({
      query: this.GET_USER,
      variables: {
        id,
      },
    });
  }
  async getUserwithoutAuth(id) {
    return await client.query({
      query: this.GET_USER_WITHOUT_AUTH,
      variables: {
        id,
      },
    });
  }
  async verifyUserMobile({ id, mobileNumber }) {
    return await client.mutate({
      mutation: this.VERFITY_USER_MOBILE,
      variables: {
        id,
        mobileNumber,
      },
    });
  }
  async comfirmUserMobile({ user, token }) {
    const tokenType = "MOBILE_VERIFICATION"
    return await client.mutate({
      mutation: this.COMFIRM_USER_MOBILE,
      variables: {
        user,
        token,
        tokenType
      },
    });
  }
}
export default apollaHelperClass;
