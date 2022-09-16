import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, userSelector } from "../../features/auth";
import {
  AppBar,
  IconButton,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  StyledToolbar,
  StyledIconButton,
  StyledNav,
  StyledDrawer,
  LinkButton,
} from "./styles";
import { Sidebar, Search } from "..";
import { fetchToken, createSessionId, moviesApi } from "../../utils";
import { ColorModeContext } from "../../utils/ToggleColorMode";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector(userSelector);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px");
  const dispatch = useDispatch();
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const token = localStorage.getItem("request_token");
  const session_idFromLocalStorage = localStorage.getItem("session_id");

  //**** Checking if there token or not ****//
  useEffect(() => {
    const loginUser = async () => {
      if (token) {
        if (session_idFromLocalStorage) {
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${session_idFromLocalStorage}`
          );
          dispatch(setUser(userData));
        } else {
          const session_id = await createSessionId();
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${session_id}`
          );
          dispatch(setUser(userData));
        }
      }
    };
    loginUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <StyledToolbar>
          {isMobile && (
            <StyledIconButton
              edge="start"
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            >
              <Menu />
            </StyledIconButton>
          )}
          <IconButton
            color="inherit"
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
          >
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {/* Search Input */}
          {!isMobile && <Search />}
          <div>
            {/* Login Button */}
            {!isAuthenticated ? (
              <Button
                color="inherit"
                onClick={() => {
                  fetchToken();
                }}
              >
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <LinkButton
                color="inherit"
                component={Link}
                to={`/profile/${user.id}`}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  sx={{
                    width: "30px",
                    height: "30px",
                  }}
                  alt="Profile"
                  src="https://www.darylroththeatre.com/wp-content/uploads/2018/10/avatar-placeholder.png"
                />
              </LinkButton>
            )}
          </div>
          {/* Search Input */}
          {isMobile && <Search />}
        </StyledToolbar>
      </AppBar>
      <div>
        <StyledNav>
          {isMobile ? (
            <StyledDrawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              ModalProps={{ keepMounted: true }}
            >
              {/* Sidebar */}
              <Sidebar setMobileOpen={setMobileOpen} />
            </StyledDrawer>
          ) : (
            <StyledDrawer variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </StyledDrawer>
          )}
        </StyledNav>
      </div>
    </>
  );
};

export default Navbar;
