import React,{ReactElement,FC} from "react";
import { AppBar, Toolbar } from "@material-ui/core";
interface Props{
  title:string
}
const Header:FC<any>=({title}):ReactElement=>{
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <div>
                      <p>This is a {title}</p>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default Header;  
