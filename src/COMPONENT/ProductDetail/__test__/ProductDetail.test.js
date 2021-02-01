// import React from 'react'
import React from 'react'
import ProductDetail from '../ProductDetail'
import {shallow, mount} from 'enzyme'
// import { act } from "react-dom/test-utils";
// import axios from "axios";
// import {urlApi} from '../../../HELPERS/database'

describe("rendering components", () => {
  it("renders ProductDetail component without crashing", () => {
    shallow(<ProductDetail/>)
  })
})

//// Testing Axios

jest.mock("axios")

// mock data
const data = {
  images: {
    uri: "image-url",
  },
};

describe("LoadImage Test", () => {
  let wrapper;

  // clear all mocks
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders with loading", () => {
    wrapper = shallow(<ProductDetail />);    
    expect(wrapper.find("Spinner").first().text()).toBe("Loading..");
  });

  // test("loads img", async () => {

  //   // mock axios promise
  //   await act(async () => {
  //     await axios.get.mockImplementationOnce(() => Promise.resolve(data));
  //     wrapper = mount(<ProductDetail />);
  //   });

  //   // check the render output
  //   wrapper.update();

  //   await expect(axios.get).toHaveBeenCalledWith(urlApi);

  //   await expect(axios.get).toHaveBeenCalledTimes(1);
  //   await axios.get.mock.results[0]

  //   await expect(wrapper.find("Image").props().src).toEqual("image-url");
  // });

})