import React from 'react'
export default function DashBoardTable(props) {
    return (
        <>
            <ul>
                <li>{props.name}</li>
                <li>{props.email}</li>
                <li>{props.phoneNumber}</li>
                <li>{props.serviceType}</li>
                <li>{props.date}</li>
                <li>{props.time}</li>
                <li>{props.address}</li>
                <li>{props.message}</li>
                <li>{props.status}</li>

            </ul>
        </>
    )
}
