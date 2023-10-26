import React, { useState } from "react";
import "./adminHome.css";
import AdminProducts from "./AdminProd";
import Orders from "./adminPages/Orders";
function AdminHome() {
  const [selected, setSelected] = useState("dashboard");

  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="App">
      <section id="sidebar" className={isActive ? "hide" : null}>
        <a href="#" class="brand">
          <i class="bx bxs-smile"></i>
          <span class="text">AdminHub</span>
        </a>
        <ul class="side-menu top">
          <li class="active" onClick={() => setSelected("dashboard")}>
            <a href="#">
              <i class="bx bxs-dashboard"></i>
              <h1>Dashboard</h1>
            </a>
          </li>
          <li onClick={() => setSelected("verification")}>
            <a href="#">
              <i class="bx bxs-shopping-bag-alt"></i>
              <h1>Verifications</h1>
            </a>
          </li>
          <li onClick={() => setSelected("orders")}>
            <a href="#">
              <i class="bx bxs-doughnut-chart"></i>
              <h1>Orders</h1>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bxs-message-dots"></i>
              <h1>Message</h1>
            </a>
          </li>
          <li onClick={() => setSelected("providers")}>
            <a href="#">
              <i class="bx bxs-server"></i>
              <h1>Providers</h1>
            </a>
          </li>
          <li onClick={() => setSelected("users")}>
            <a href="#">
              <i class="bx bxs-group"></i>
              <h1>Customers</h1>
            </a>
          </li>
        </ul>
        <ul class="side-menu">
          <li>
            <a href="#">
              <i class="bx bxs-cog"></i>
              <h1>Settings</h1>
            </a>
          </li>
          <li>
            <a href="#" class="logout">
              <i class="bx bxs-log-out-circle"></i>
              <h1>Logout</h1>
            </a>
          </li>
        </ul>
      </section>

      <section id="content">
        <nav>
          <i class="bx bx-menu" onClick={toggleClass}></i>
          <a href="#" class="nav-link">
            Categories
          </a>
          <form action="#">
            <div class="form-input">
              <input type="search" placeholder="Search..." />
              <button type="button" class="search-btn">
                <i class="bx bx-search"></i>
              </button>
            </div>
          </form>
          <a href="#" class="notification">
            <i class="bx bxs-bell"></i>
            <span class="num">8</span>
          </a>
          <a href="#" class="profile">
            <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
          </a>
        </nav>
        {selected === "users" && <AdminProducts />}
        {selected === "providers" && <AdminProducts />}
        {selected === "verification" && <AdminProducts />}
        {selected === "orders" && <Orders />}
        {selected === "dashboard" && (
          <>
            <main>
              <div class="head-title">
                <div class="left">
                  <h1>Dashboard</h1>
                  <ul class="breadcrumb">
                    <li>
                      <a href="#">Dashboard</a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i>
                    </li>
                    <li>
                      <a class="active" href="#">
                        Home
                      </a>
                    </li>
                  </ul>
                </div>
                <a href="#" class="btn-download">
                  <i class="bx bxs-cloud-download"></i>
                  <span class="text">Download PDF</span>
                </a>
              </div>
              <ul class="box-info">
                <li>
                  <i class="bx bxs-calendar-check"></i>
                  <span class="text">
                    <h3>1020</h3>
                    <p>Completed Services</p>
                  </span>
                </li>
                <li>
                  <i class="bx bxs-group"></i>
                  <span class="text">
                    <h3>2834</h3>
                    <p>New users</p>
                  </span>
                </li>
                <li>
                  <i class="bx bxs-dollar-circle"></i>
                  <span class="text">
                    <h3>$2543</h3>
                    <p>Total Transactions</p>
                  </span>
                </li>
              </ul>
              <div class="table-data">
                <div class="order">
                  <div class="head">
                    <h3>Service Status</h3>
                    <i class="bx bx-search"></i>
                    <i class="bx bx-filter"></i>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <th>Service Name</th>

                        <th>Completed</th>
                        <th>Ongoing</th>
                        <th>Cancelled</th>
                        <th>Orders</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                          <p>Plumbing</p>
                        </td>

                        <td>
                          <span class="status completed">1</span>
                        </td>
                        <td>
                          <span class="status process">1</span>
                        </td>
                        <td>
                          <span class="status cancelled">1</span>
                        </td>
                        <td>3</td>
                        <td>
                          <span class="admin-service">Details</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                          <p>Land Scaping</p>
                        </td>

                        <td>
                          <span class="status completed">1</span>
                        </td>
                        <td>
                          <span class="status process">40</span>
                        </td>
                        <td>
                          <span class="status cancelled">15</span>
                        </td>
                        <td>56</td>
                        <td>
                          <span class="admin-service">Details</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                          <p>Cleaning</p>
                        </td>

                        <td>
                          <span class="status completed">10</span>
                        </td>
                        <td>
                          <span class="status process">23</span>
                        </td>
                        <td>
                          <span class="status cancelled">7</span>
                        </td>
                        <td>44</td>
                        <td>
                          <span class="admin-service">Details</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                          <p> Errand Runing</p>
                        </td>

                        <td>
                          <span class="status completed">50</span>
                        </td>
                        <td>
                          <span class="status process">40</span>
                        </td>
                        <td>
                          <span class="status cancelled">9</span>
                        </td>
                        <td>99</td>
                        <td>
                          <span class="admin-service">Details</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="todo">
                  <div class="head">
                    <h3>Pending verifications</h3>
                    <i class="bx bx-plus"></i>
                    <i class="bx bx-filter"></i>
                  </div>
                  <ul class="todo-list">
                    <li class="not-completed">
                      <p>Provider name</p>
                      <i class="bx bx-dots-vertical-rounded"></i>
                    </li>
                    <li class="not-completed">
                      <p>Provider name</p>
                      <i class="bx bx-dots-vertical-rounded"></i>
                    </li>
                    <li class="not-completed">
                      <p>Provider Name</p>
                      <i class="bx bx-dots-vertical-rounded"></i>
                    </li>
                    <li class="not-completed">
                      <p>Provider name</p>
                      <i class="bx bx-dots-vertical-rounded"></i>
                    </li>
                    <li class="not-completed">
                      <p>Provider name </p>
                      <i class="bx bx-dots-vertical-rounded"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </main>
          </>
        )}
      </section>
    </div>
  );
}

export default AdminHome;