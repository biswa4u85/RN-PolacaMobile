Home

GET https://polaca-ppe.azurewebsites.net/api/election/geo/{lat}/{lon}?code=vTzqfKpqE5A2QlSJiWYozBdu3dVw1JcUkdLQ5Ba14oNadBMgsh6CPg== 


Response Example:

[
{
"id": 4,
"countryId": 1,
"startTime": "2018-06-04T00:00:00",
"endTime": "2018-07-05T00:00:00",
"description": "Encuesta de Mascota de Transparencia Digital",
"Coalitions": null
}
]

Cameara
Test API Call to get the SAS Token:

https://polaca-ppe.azurewebsites.net/api/storagetoken/{electionId}/{sessionId}/{lat}/{lon}?code=yatH0rCxpWAwMWpez7ps9/DnIRahSq0nzFf3lEWeXKYiHA/cHZHTmA== 

With that SAS token, you'll upload the image to Azure Blob Storage as explained here:

https://docs.microsoft.com/en-us/rest/api/storageservices/put-blob 

Note that the authentication is with Shared Access Signature (SAS keys).

Chat
https://polaca-ppe.azurewebsites.net/api/election/7161c04b-2052-4b23-8a8e-175b3b85dc0f/results?code=Qq3jYRVGlil26eRwjBYXnzW2VaeyFuNpV2WF31wwGjSncd4bQbWF4Q==