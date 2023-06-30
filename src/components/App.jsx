import { Component } from "react";
import Reviews from "./Reviews/Reviews";

export class App extends Component  {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
}
  return (
    <div>
      <Reviews />
    </div>
  );
};
