import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MessageIcon from '@mui/icons-material/Message';
import EditRoadIcon from '@mui/icons-material/EditRoad';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import Profile from './Profile';
import Analysis from './Analysis';
import Accounting from './Accounting';
import Messages from './Messages';
import Projects from './Projects';
import DashboardChild from './DashboardChild';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const params = useParams();
  const location = useLocation();


  
  const drawer = (
    <div >
      <Toolbar />
      <Divider />
      <List>
        {[
          {
            text: 'Dashboard',
            icon: <InboxIcon />
          },
          {
            text: 'Profile',
            icon: <PersonOutlineIcon />,
          },
          {
            text: 'Analysis',
            icon: <AutoGraphIcon />
          },
          {
            text: 'Accounting',
            icon: <AccountBalanceWalletIcon />
          },
          {
            text: 'Messages',
            icon: <MessageIcon />
          },
          {
            text: 'Projects',
            icon: <EditRoadIcon />
          }
        ].map(({ text, icon }, index) => (
          // <Link key={index} to={text}  sx={{ textDecoration: 'none' }}>
          <ListItem key={index} onClick={() => handleClick(text)} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
          // </Link>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const handleClick = (address) => {
    // console.log("address:",handleClick)
    navigate(`${address}`, { state: location.state })
    // console.log(location.state);
  }
  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {/* {params.name} Dashboard */}
            {location.state.name} Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{

            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}

        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{

            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Routes>
          <Route path="/Dashboard" element={<DashboardChild />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Analysis" element={<Analysis />} />
          <Route path="/Accounting" element={<Accounting />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
