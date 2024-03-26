import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Strategies from "../strategies/Strategies";
import Settings from "../settings/Settings";
import "./main-dashboard.css";
import "react-quill/dist/quill.snow.css";
import Dashboard from "../dashboard/Dashboard";

const MainDashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("");
  const [hoveredComponent, setHoveredComponent] = useState("");

  const handleImageHover = (component) => {
    setHoveredComponent(component);
    setSelectedComponent(component);
  };

  const handleImageLeave = () => {
    setHoveredComponent("");
  };

  return (
    <div>
      <Navbar variant="dark" className="dashboard-header">
        <Navbar.Brand className="fs-3">
          <img
            src={require("../../assets/Net Nimbus Logo Final-01 1.png")}
            className="w-32 h-11 pl-6"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end w-61 h-3">
          <Navbar.Text className="login-status">
            User Name: {localStorage.getItem("username")}
          </Navbar.Text>
          <img
            src={require("../../assets/Shape (3).png")}
            className="w-11 h-11"
          />
        </Navbar.Collapse>
      </Navbar>
      <div className="columns-container">
        <Nav className="flex-column justify-content-between">
          <div className="nav-links-container">
            <div className="nav-menu-items mt-1 mb-1 pl-3 pr-3  gap-3 leading-5">
              <Nav.Link
                eventKey="link-1"
                onMouseEnter={() => handleImageHover("dashboard")}
                onMouseLeave={handleImageLeave}
                active={selectedComponent === "dashboard"}
                className={`dashboard-text ${
                  hoveredComponent === "dashboard"
                    ? "image-hovered"
                    : "image-normal"
                }`}
              >
                <img
                  src={require("../../assets/Shape (2).png")}
                  className="w-4 h-4"
                />
                {hoveredComponent === "dashboard" && (
                  <span className="text">Dashboard</span>
                )}
              </Nav.Link>
            </div>

            <div className="nav-menu-items mt-1 mb-1 pl-3 pr-3  gap-3 leading-5">
              <Nav.Link
                eventKey="link-2"
                onMouseEnter={() => handleImageHover("settings")}
                onMouseLeave={handleImageLeave}
                active={selectedComponent === "settings"}
                className={`broker-settings-img ${
                  hoveredComponent === "settings"
                    ? "image-hovered"
                    : "image-normal"
                }`}
              >
                <img
                  src={require("../../assets/Settings.png")}
                  alt="stratergy image missing"
                  className="w-5 h-5"
                />
                {hoveredComponent === "settings" && (
                  <span className="text">
                    Broker <br /> Settings
                  </span>
                )}
              </Nav.Link>
            </div>
            <div className="nav-menu-items mt-1 mb-1 pl-3 pr-3  gap-3 leading-5">
              <Nav.Link
                eventKey="link-3"
                onMouseEnter={() => handleImageHover("strategy")}
                onMouseLeave={handleImageLeave}
                active={selectedComponent === "strategy"}
                className={`strategy-img ${
                  hoveredComponent === "strategy"
                    ? "image-hovered"
                    : "image-normal"
                }`}
              >
                <img
                  src={require("../../assets/Shape.png")}
                  alt="stratergy img missing"
                  className="w-5 h-5"
                />
                {hoveredComponent === "strategy" && (
                  <span className="text">Strategy</span>
                )}
              </Nav.Link>
            </div>
          </div>
        </Nav>
        <div>
          {selectedComponent === "dashboard" && <Dashboard />}
          {selectedComponent === "settings" && <Settings />}
          {selectedComponent === "strategy" && <Strategies />}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
