import React from 'react'

const DonCompareOne = ({attributesOne}) => {
    
    const {org_name, total, pacs, indivs} = attributesOne['@attributes']

    return (
        <div>
             <ul>
                <li id='hidethis'>
                Organization Name: {org_name}{' '}
                Amount from PACs: {pacs} {' '}
                Indivdual Contributions: {indivs}{' '}
                Total: {total}
                </li>
            </ul>
            
        </div>
    )
}

export default DonCompareOne
