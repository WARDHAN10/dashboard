import React from "react";
import "../styles.css";
import unlu from "./unlu-1.jpg";
function Overview(props) {
  return (
    <div className="bg-white">
      <div className="d">
        {" "}
        <h1 className="text-dark o ">
          {" "}
          Overview{" "}
          <span style={{ float: "right" }}>
            <button
              type="button"
              class="btn btn-light"
              style={{ width: "70px" }}
            >
              <b className="text-muted">...</b>
            </button>
            <button
              type="button"
              class="btn btn-success mx-2"
              style={{ width: "70px" }}
            >
              Add
            </button>
          </span>
        </h1>{" "}
      </div>
      <div className="d2">
        <table class="table table-striped align-items-center">
          <thead>
            <tr className=" text-muted text-start ">
              <th scope="col" style={{ width: "30%" }}>
                Owner
              </th>
              <th scope="col" style={{ width: "17.5%" }}>
                End Date
              </th>
              <th scope="col" style={{ width: "17.5%" }}>
                Profits
              </th>
              <th scope="col" style={{ width: "17.5%" }}>
                Losses
              </th>
              <th scope="col" style={{ width: "17.5%" }}>
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg2">
              <th scope="row" className="text-start head">
                <img
                  src={unlu}
                  alt=""
                  height="30px"
                  width="30px"
                  className="img2 mx-2"
                />
                Savannah Nguyen{" "}
              </th>
              <td>1/15/12</td>
              <td className="gn">$328.85</td>
              <td className="rd">$779.58</td>
              <td>(603) 555-0123</td>
            </tr>
            <tr className="bg1">
              <th scope="row" className="text-start ">
                {" "}
                <img
                  src={unlu}
                  alt=""
                  height="30px"
                  width="30px"
                  className="img2 mx-2"
                />
                Jenny Wilson{" "}
              </th>
              <td>8/30/14</td>
              <td className="gn">$948.55</td>
              <td className="rd">$589.99</td>
              <td>(629) 555-0129</td>
            </tr>
            <tr className="bg2">
              <th scope="row" className="text-start head">
                {" "}
                <img
                  src={unlu}
                  alt=""
                  height="30px"
                  width="30px"
                  className="img2 mx-2"
                />
                Annette Black{" "}
              </th>
              <td>5/30/14</td>
              <td className="gn">$778.35</td>
              <td className="rd">$948.55</td>
              <td>(308) 555-0121</td>
            </tr>
            <tr className="bg1">
              <th scope="row" className="text-start">
                {" "}
                <img
                  src={unlu}
                  alt=""
                  height="30px"
                  width="30px"
                  className="img2 mx-2"
                />
                Kathryn Murphy{" "}
              </th>
              <td>11/7/16</td>
              <td className="gn">$169.43</td>
              <td className="rd">$202.87</td>
              <td>(302) 555-0107</td>
            </tr>
            <tr className="bg2">
              <th scope="row" className="text-start">
                {" "}
                <img
                  src={unlu}
                  alt=""
                  height="30px"
                  width="30px"
                  className="img2 mx-2"
                />
                Cameron Willianson{" "}
              </th>
              <td>7/27/13</td>
              <td className="gn">$782.01</td>
              <td className="rd">$710.68</td>
              <td>(303) 555-0105</td>
            </tr>
            <tr className="bg1">
              <th scope="row" className="text-start">
                {" "}
                <img
                  src={unlu}
                  alt=""
                  height="30px"
                  width="30px"
                  className="img2 mx-2"
                />
                Kristin Watson{" "}
              </th>
              <td>5/19/12</td>
              <td className="gn">$767.50</td>
              <td className="rd">$779.58</td>
              <td>(225) 555-0118</td>
            </tr>
            <tr className="bg2">
              <th scope="row" className="text-start">
                {" "}
                <img
                  src={unlu}
                  alt=""
                  height="30px"
                  width="30px"
                  className="img2 mx-2"
                />
                Eleanor pena{" "}
              </th>
              <td>8/21/15</td>
              <td className="gn">$475.22</td>
              <td className="rd">$219.78</td>
              <td>(225) 555-0118</td>
            </tr>
            <tr className="bg1">
              <th scope="row" className="text-start">
                {" "}
                <img
                  src={unlu}
                  alt=""
                  height="30px"
                  width="30px"
                  className="img2 mx-2"
                />
                Guy Hawkins{" "}
              </th>
              <td>5/27/15</td>
              <td className="gn">$576.28</td>
              <td className="rd">$446.61</td>
              <td>(205) 555-0119</td>
            </tr>
            <tr className="bg2">
              <th scope="row" className="text-start">
                {" "}
                <img
                  src={unlu}
                  alt=""
                  height="30px"
                  width="30px"
                  className="img2 mx-2"
                />
                Brooklyn Simmons{" "}
              </th>
              <td>3/4/16</td>
              <td className="gn">$219.78</td>
              <td className="rd">$928.41</td>
              <td>(207) 555-0124</td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                {" "}
                <img
                  src={unlu}
                  alt=""
                  height="30px"
                  width="30px"
                  className="img2 mx-2"
                />
                Robert Fox{" "}
              </th>
              <td>4/4/18</td>
              <td className="gn">$202.87</td>
              <td className="rd">$275.43</td>
              <td>(684) 555-0102</td>
            </tr>
          </tbody>
        </table>
        <div className="px-5">
          <ul class="pagination ">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Overview;
