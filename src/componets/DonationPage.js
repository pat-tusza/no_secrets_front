import React from 'react'


const DonationPage = ({attributes}) => {
    
    
    // console.log(attributes['@attributes'])
    const {org_name, total, pacs, indivs} = attributes['@attributes']
    
    return (
        <div>
            <ul className= "ul-hide">
                <li className= "don-list">
                Organization Name: {org_name}{' '}
                Amount from PACs: {pacs} {' '}
                Indivdual Contributions: {indivs}{' '}
                Total: {total}
                </li>
            </ul>
           
        </div>
    )
}

export default DonationPage
