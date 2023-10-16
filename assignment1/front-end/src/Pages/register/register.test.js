import { getUsers } from "../../Repository/user";
import { render, screen, fireEvent } from "@testing-library/react";
import Register from "./Register";

let users;
let container;

beforeAll(() => {
    users = getUsers();
  });
  
  // Runs before each test, here the Users component is rendered and the container is stored.
  test('should pass when true is true', () => {
    expect(true).toBe(true);
  });

  