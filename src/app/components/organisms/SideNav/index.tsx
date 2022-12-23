import { FC, ReactElement, useMemo, useState } from "react";
import {
  ButtonToggler,
  MenuContainer,
  MenuItem,
  ProfileContainer,
  ProfilePicture,
  SettingsContainer,
  SideNavContainer,
} from "./style";
import { iSideNavProps } from "./types";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SettingsIcon from "@mui/icons-material/Settings";
import useIsMobile from "@hooks/useIsMobile";
import Text from "@components/atoms/Text";
import { Box, IconButton, Popover } from "@mui/material";
import { MENU, iMenuProps } from "@constants/menu";

const SideNav: FC<iSideNavProps> = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openSetting = Boolean(anchorEl);
  const id = openSetting ? "simple-popover" : undefined;

  const handleToggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const renderDesktopNav = useMemo(() => {
    return (
      <SideNavContainer isOpen={isOpen}>
        <ButtonToggler isOpen={isOpen} onClick={handleToggleNavbar}>
          <KeyboardArrowRightIcon />
        </ButtonToggler>
        <ProfileContainer isOpen={isOpen}>
          <ProfilePicture
            isOpen={isOpen}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLEziy2FWAM6Z0NT0yTmsmD2VySobPG4y7eWSEd4heKgu-cU0WCZLxn5Poox0Y9KYmyc&usqp=CAU"
          />
          <Text variant="h3"> Robert Downey Jr</Text>
          <Text variant="h4Regular"> Administrator</Text>
        </ProfileContainer>
        <MenuContainer isOpen={isOpen}>
          {MENU.map((item: iMenuProps) => {
            const { Icon, name } = item;
            return (
              <MenuItem key={name} isOpen={isOpen} isSelected>
                <Icon />
                <Text className="menu-name" variant="h4SemiBold">
                  {name}
                </Text>
              </MenuItem>
            );
          })}
        </MenuContainer>
        <SettingsContainer>
          <IconButton aria-describedby={id} onClick={handleClick}>
            <SettingsIcon />
          </IconButton>
          <Popover
            id={id}
            open={openSetting}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Box sx={{ px: 2, py: 1, cursor: "pointer" }}>Logout</Box>
          </Popover>
        </SettingsContainer>
      </SideNavContainer>
    );
  }, [anchorEl, id, isOpen, openSetting]);

  const renderMobileNav = useMemo(() => {
    return (
      <SideNavContainer isOpen={isOpen}>
        <ButtonToggler isOpen={isOpen} onClick={handleToggleNavbar}>
          <KeyboardArrowRightIcon />
        </ButtonToggler>
      </SideNavContainer>
    );
  }, [isOpen]);

  return isMobile ? renderMobileNav : renderDesktopNav;
};
export default SideNav;
