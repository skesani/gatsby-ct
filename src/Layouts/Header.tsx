import React from 'react';
import {Link} from 'gatsby';
import styled, {DefaultTheme} from 'styled-components';
import Select from '@paljs/ui/Select';
import {LayoutHeader} from '@paljs/ui/Layout';
import {EvaIcon} from '@paljs/ui/Icon';
import {Actions} from '@paljs/ui/Actions';
import {breakpointDown} from '@paljs/ui/breakpoints';

const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${breakpointDown('sm')`
    .right{
      display: none;
    }
  `}
  .right > div {
    height: auto;
    display: flex;
    align-content: center;
  }
  .logo {
    font-size: 1.5rem;
    white-space: nowrap;
    text-decoration: none;
    color: #112e51;
    text-align: left;
  }
  .left {
    display: flex;
    align-items: center;
    .github {
      font-size: 18px;
      margin-right: 5px;
    }
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
`;

const SelectStyled = styled(Select)`
  min-width: 150px;
`;

interface HeaderProps {
    toggleSidebar: () => void;
    theme: {
        set: (value: DefaultTheme['name']) => void;
        value: DefaultTheme['name'];
    };
    changeDir: () => void;
    dir: 'rtl' | 'ltr';
}

const Header: React.FC<HeaderProps> = (props) => {
    const themeOptions = [
        {
            value: 'default',
            label: (
                <Label>
                    <EvaIcon name="droplet" options={{ fill: '#a6c1ff' }} />
                    Default
                </Label>
            ),
        },
        {
            value: 'dark',
            label: (
                <Label>
                    <EvaIcon name="droplet" options={{ fill: '#192038' }} />
                    Dark
                </Label>
            ),
        },
        {
            value: 'cosmic',
            label: (
                <Label>
                    <EvaIcon name="droplet" options={{ fill: '#5a37b8' }} />
                    Cosmic
                </Label>
            ),
        },
        {
            value: 'corporate',
            label: (
                <Label>
                    <EvaIcon name="droplet" options={{ fill: '#3366ff' }} />
                    Corporate
                </Label>
            ),
            selected: true,
        },
    ];
    return (
        <LayoutHeader fixed>
            <HeaderStyle>
                <Actions
                    size="Medium"
                    actions={[
                        {
                            content: (
                                <Link to="/" className="logo">
                                    CTP API Directory
                                </Link>
                            ),
                        },
                      /*  {
                            content: (
                                <SelectStyled
                                    isSearchable={false}
                                    shape="SemiRound"
                                    placeholder="Themes"
                                    value={themeOptions.find((item) => item.value === props.theme.value)}
                                    options={themeOptions}
                                    onChange={({ value }: { value: DefaultTheme['name'] }) => props.theme.set(value)}
                                />
                            ),
                        }*/
                    ]}
                />
            </HeaderStyle>
        </LayoutHeader>
    );
};
export default Header;
