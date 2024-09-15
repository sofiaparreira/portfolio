import React from 'react'

const CardExperience = ({cargo, empresa, data, firstDescription, secondDescription, thirdDescription }) => {
  return (
    <div className="mb-16">
              <h2 className="text-gray-700 font-semibold text-lg mb-4">{cargo}</h2>
              <p>{empresa}</p>
              <p className="text-sm">{data}</p>

              <ul className="mt-8 list-disc list-inside">
                <li className="text-sm text-gray-600 mb-2">{firstDescription}</li>
                <li className="text-sm text-gray-600 mb-2">{secondDescription}</li>
                <li className="text-sm text-gray-600 mb-2">{thirdDescription}</li>
              </ul>
            </div>
  )
}

export default CardExperience