import React from "react";
import { Redirect, Route } from "react-router-dom";
import SideBarComponent from './SideBarComponent';
import EvenNumbers from './EvenNumberComponent';
import Posts from './Post';
import LogInFormComponent from './FormComponent';
import ParentComponent from './ParentComponent';
import '../sidebar.css';


function Content() {
    return (
        <div class="row">
            <div class="col-2">
                <SideBarComponent />
            </div>
            <div class="col-10 Content">
                <div class="row">
                    <div class="col-2 even">
                        <EvenNumbers />
                    </div>
                    <div class="col-10 Array">
                    <Route path="/post/:year?/:month?" component={Posts} />
                    <Route path="/login" component={LogInFormComponent} />
                    <Route path="/parent" component={ParentComponent} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;