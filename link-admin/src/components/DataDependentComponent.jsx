import React from 'react'
import { STATUS } from 'link-rest-client/api'
import Loading from 'components/Loading'
import Error from 'components/Error'

const DataDependentComponent = ({ status, component: Component }) => {
	
	switch(status) {
		case STATUS.SUCCESS:
			return Component
		case STATUS.ERROR:
			return <Error />
		case STATUS.LOADING:
		default:
			return <Loading />
	}
}

export default DataDependentComponent
