// LOGIN
// props
export interface LoginScreenProps {
  route?: Record<string, unknown>;
}
// data
export interface LoginScreenDataState {
  email: string;
  password: string;
  phoneNo: string;
}
// error
export interface LoginScreenErrorState {
  email: string;
  password: string;
  phoneNo: string;
}

// FORGOT PASSWORD
// props
export interface ForgotPasswordScreenProps {
  route: {
    params: {
      type: string;
    };
  };
}
// data
export interface ForgotPasswordScreenDataState {
  email: string;
  newPassword: string;
  confirmPassword: string;
}
// error
export interface ForgotPasswordScreenErrorState {
  email: string;
  newPassword: string;
  confirmPassword: string;
}

// OTP SCREEN
export interface OTPScreenProps {
  route: {
    params: {
      type: string;
    };
  };
}

// REGISTER SCREEN
// props
export interface RegisterScreenProps {
  route: {
    params: {
      type?: string;
    };
  };
}
// data
export interface RegisterScreenFormData {
  firstName?: string;
  middleName?: string;
  gender?: string | null;
  dob?: string | null;
  email?: string;
  phoneNo?: string;
  [key: string]: any;
}

// SEARCH SCREEN
export interface Trip {
  id: number;
  from: string;
  to: string;
}

// data
export interface City {
  id: number;
  city: string;
}

export interface searchScreenData {
  fromLocation: string;
  toLocation: string;
}

// SEARCH BUS SCREEN
// props
export interface SearchBusScreenProps {
  route: {
    params: {
      data: {
        from: string;
        to: string;
        date: string;
      };
    };
  };
}

export interface FilterListItem {
  id: number | string;
  label: string;
  value: string;
}

export interface TicketType {
  type: string;
  seats: string;
  price: string;
}

export interface ListItem {
  label: string[];
  name: string;
  seatsLeft: number;
  timePeriod: string[];
  duration: string;
  types: TicketType[];
  review: string;
}

export interface ReviewContent {
  name: string;
  comment: string;
  date: string;
  points: number;
}

// SELECT BOARDING POINT SCREEN
// props
export interface BoardingPointRouteParams {
  route: {
    params: {
      data: {
        from: string;
        to: string;
        date: string;
        item: {
          label: string[];
          name: string;
          seatsLeft: number;
          timePeriod: string[];
          duration: string;
          types: {type: string; seats: string; price: string}[];
          review: string;
        };
      };
    };
  };
}
// data
export interface BoardingPoint {
  id: string | number;
  name: string;
}

// SELECT BOARDING POINTS
export type BoardingPointType = {
  id: number;
  place: string;
  time: string;
  address: string;
};

export type SelectedPointsType = {
  boarding: BoardingPointType | null;
  dropping: BoardingPointType | null;
};

// ACCOUNT SCREEN

// props
export interface AccountScreenProps {}
export interface Passenger {
  name: string;
  age: string;
  gender: string;
}
