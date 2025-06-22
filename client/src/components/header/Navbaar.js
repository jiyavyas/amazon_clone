import { React, useContext, useEffect, useState } from "react";
import "./navbaar.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Options from "./Options";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink, useNavigate } from "react-router-dom";
// import { colors } from '@mui/material';
// import Dropdown from './Dropdown.js';
//import List from "@mui/material/List";
//import ListItem from "@mui/material/ListItem";
import { Logincontext } from "../context/ContextProvider";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
//import IconButton from '@mui/material/IconButton';
import MenuIcon from "@mui/icons-material/Menu";
//import Drawer from '@mui/material/Drawer';
import Rightheader from "./Rightheader";
import { Drawer, IconButton, List, ListItem } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

const Navbaar = () => {
  const { account, setAccount } = useContext(Logincontext);
  const history = useNavigate();
  // console.log(account)
  // console.log(account.carts.length);

  const [text, setText] = useState("");
  console.log(text);
  const [open, setOpen] = useState(false);
  const [liOpen, setLiOpen] = useState(true);
  const { products } = useSelector((state) => state.getproductdata);
  const [dropen, setDropen] = useState(false);

  const handleClick = () => {
    console.log("Avatar clicked!");
    // Add your dropdown toggle or logout logic here
  };

  const getdetailValidUSer = async () => {
    const res = await fetch("/validUser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    console.log(data);

    if (res.status !== 201) {
      console.log("Error ");
    } else {
      console.log("Data valid");
      setAccount(data);
    }
  };
  // for drawer

  const handelopen = () => {
    setDropen(true);
  };

  const handledrClose = () => {
    setDropen(false);
  };
  const getText = (items) => {
    setText(items);
    setLiOpen(false);
  };
  // for logout
  const logoutuser = async () => {
    const res2 = await fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data2 = await res2.json();
    // console.log(data2);

    if (!res2.status === 201) {
      const error = new Error(res2.error);
      throw error;
    } else {
      setAccount(false);
      setOpen(false);
      toast.success("user Logout 😃!", {
        position: "top-center",
      });
      history("/");
    }
  };
  useEffect(() => {
    getdetailValidUSer();
  }, []);
  // for logout
  /*const logoutuser = async () => {
        const res2 = await fetch("/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data2 = await res2.json();
        // console.log(data2);

        if (!res2.status === 201) {
            const error = new Error(res2.error);
            throw error;
        } else {
            setAccount(false);
            setOpen(false)
            toast.success("user Logout 😃!", {
                position: "top-center"
            });
            history.push("/");
        }
    }*/

  return (
    <>
      <header>
        <nav>
          <div className="left">
            <IconButton onClick={handelopen}>
              <MenuIcon style={{ color: "#fff" }} />
            </IconButton>
            {/* here define the right header */}
            <Drawer open={dropen} onClose={handledrClose}>
              <Rightheader userlog={logoutuser} logclose={handledrClose} />
            </Drawer>

            <NavLink to="/">
              <img src="./amazon_logo.png" alt="amazon logo" />
            </NavLink>
            <div className="location">
              <span>Delivering to location</span>
              <p>
                <LocationOnOutlinedIcon />
                <strong>Update Location </strong>
              </p>
            </div>
            <Options />
            <input
              type="text"
              name=""
              onChange={(e) => getText(e.target.value)}
              id=""
              placeholder="Search Amazon.in"
            />
            <div className="search_icon">
              <SearchIcon />

              {text && (
                <List className="extrasearch" hidden={liOpen}>
                  {products
                    .filter((product) =>
                      product.title.longTitle
                        .toLowerCase()
                        .includes(text.toLowerCase())
                    )
                    .map((product) => (
                      <ListItem>
                        <NavLink
                          to={`/getproductsone/${product.id}`}
                          onClick={() => setLiOpen(true)}
                        >
                          {product.title.longTitle}
                        </NavLink>
                      </ListItem>
                    ))}
                </List>
              )}
              {/* {
                text &&
                <List className='extrasearch' hidden={liOpen}>
                  {
                    second_data.filter(product => product.title.shortTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                      <ListItem>
                        {product.title.longTitle}
                      </ListItem>
                    ))
                  }
                </List>
              } */}
            </div>

            <div className="right">
              <div className="language">
                <img src="./icons8-india-48.png" alt="" />
                <span>EN</span>
              </div>
              <div className="sign_in">
                {/* <Dropdown /> */}
                <NavLink to="/login">
                  <span>Hello, sign in </span>
                  <p>
                    <strong>Account & Lists</strong>
                  </p>
                </NavLink>
              </div>
              <div className="return">
                <span>Return</span>
                <br />
                <span>
                  <strong>& Order</strong>
                </span>
              </div>
              <div className="cart_btn">
                {account ? (
                  <NavLink to="/buynow">
                    <Badge
                      badgeContent={account.carts?.length || 0}
                      color="primary"
                    >
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                    cart
                  </NavLink>
                ) : (
                  <NavLink to="/login">
                    <Badge badgeContent={0} color="primary">
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                    cart
                  </NavLink>
                )}
              </div>
              {account ? (
                <Avatar
                  className="avtar2"
                  onClick={handleClick}
                  title={account.fname.toUpperCase()}
                >
                  {account.fname[0].toUpperCase()}
                </Avatar>
              ) : (
                <Avatar className="avtar" onClick={handleClick} />
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbaar;
