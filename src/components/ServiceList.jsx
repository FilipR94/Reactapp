import React, {useState, useEffect} from 'react'
import ServiceItem from './ServiceItem'



const ServiceList = () => {
    const [ServiceItems, setServiceItems] = useState ([])

    const getDataUsingFetch = async () => {
      
        const res = await fetch('')
       setServiceItems(await res.json())
    }

    useEffect(() => {
        getDataUsingFetch()

    }, [])
    return (
        <div className="services">
            {
                ServiceItems.map((item) => (<ServiceItem key={item.id} item={item} />))

            }
        </div>
    )}

export default ServiceList