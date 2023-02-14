public with sharing class newsController {
    @auraEnabled
    public static Map<String,Object> retrieveNews(){
        HttpRequest httpRequest= new HttpRequest();
        httpRequest.setEndpoint('view-source:https://newsapi.org/v2/everything?q=tesla&from=2023-01-14&sortBy=publishedAt&apiKey=e02c994ba501487299a3234fd059a5f2');
        httpRequest.setMethod('GET');

        Map<String,Object> newsJsonData=new Map<String,Object>();
        String strResponse=null;

        try{
            Http http=new Http();
            HttpResponse httpResponse=http.send(httpRequest);
            if(httpResponse.getStatusCode()==200){
                strResponse=httpResponse.getBody();
            }else{
                throw new CalloutException(httpResponse.getBody());
            }
        }catch(Exception ex){
            throw ex;
        }
        if(!String.isBlank(strResponse)){
            newsJsonData=(Map<String,Object>)JSON.deserializeUntyped(strResponse);
        }
        if(!newsJsonData.isEmpty()){
            return newsJsonData;
        }else{
            return null;
        }

    }
}