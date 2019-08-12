import React, { Component } from "react";
import "./App.css";

class latihanJson extends Component{
    constructor(){
        super();
        this.state ={
            siswa: [
                {
                    id : 1,
                    name: "saya adalah siswa 1"
                },
                {
                    id: 2,
                    name: "saya adalah siswa 2"
                },
                {
                    id: 3,
                    name: "saya adalah siswa 3"
                }
            ],
            employee: []
            };
        }

        componentDidMount(){
        fetch("http://dummy.restapiexample.com/api/v1/employees")
        }
    }
