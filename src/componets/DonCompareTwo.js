import React from 'react'

const DonCompareTwo = ({attributesTwo}) => {
    
    const {org_name, total, pacs, indivs} = attributesTwo['@attributes']
    
    return (
        <div>
             <ul className='ul-list'>
                <li>
                Organization Name: {org_name}{' '}
                Amount from PACs: {pacs} {' '}
                Indivdual Contributions: {indivs}{' '}
                Total: {total}
                </li>
            </ul>
            
        </div>
    )
}

export default DonCompareTwo
