--- 

sidebar_position: 4 

--- 

  

# Foot Printing And More.. 

  ---

## ***What is Foot Printing***  

  

Foot Printing means there is a history of information, A mark leave behind or the entitles information in open internet, when validating the information is called foot printing. 

  

- After validation when the information is dug up is called enumerations. 

---

## ***Type of Foot Printing*** 

  

- Passive: the target didn't know that they have been footprinted and the tester is anonyms. 

  

- Active: the target knows that they have been footprinted and the tester is not anonyms. 

  
---

# ***Wappalyzer - Technology profiler***  

  

## ***What is Wappalyzer*** 

  

As nmap works in Command line interface Wappalyzer works for Graphical level. 

It helps us in Gathering information, enumeration, and more. 


---

# ***Passive Foot printing, Recon and Enumerations***  

  

:::note 

Target is nestforms.com 

::: 

  

- Using Wappalyzer for basic passive foot printing, enumeration and information gathering. 

  

Sometimes the Wappalyzer didn’t give full information or because of cache its show previews or stored information 

  

To remove the Cache. 

  

  

![Before_wappalzer_cache_is _not _cleared](./cybersecurity_img/Before_wappalzer_cache_is%20_not%20_cleared.png)  

  

> Navigate to **Wappalyzer setting** >> 

  

![clearing_Wappalyzer_cache](./cybersecurity_img/clearing_Wappalyzer_cache.png) 

  

>Select Clear Cached. 

  

>There is the Cleared Cached Results.. 

  

![after_Wappalyzer_cache_is_cleared.](./cybersecurity_img/after_Wappalyzer_cache_is_cleared..png) 

  

:::note 

As there is PAAS services there which means this website is using AWS Services. 

::: 

  

  
---


## ***Basic Authentication Bypass*** 

  

  

## ***Foot Printing Using Search Engine*** 

  

- Using some syntax to get the particular information's. 

  

:::note 

Target is monash.edu 

::: 

  

``` 

site:*.*.monash.edu ext:yml 

``` 

  

- Means site : all sub domains . all sub domains . root domains . edu 

- What is yml ? 

	- It is an YAML language which used in websites like. env which is environment file   

  

  

![targets.monashsearchreults](./cybersecurity_img/Targets/monash/monashsearchreults.png) 

  

From the URL it seems that they are using services which are Gitlab and GitHub. 

  

  

![targets.monashsearchreultsopened](./cybersecurity_img/Targets/monash/monashsearchreultsopened.png) 

  

>Repository  

  

  

***How to Identify that the GitHub repository is Private or Public ?*** 

  

> Repository is open  

  

  

  

![targets.monashsearchreultsopenedrepository](./cybersecurity_img/Targets/monash/monashsearchreultsopenedrepository.png) 

  

Checked the env file. 

  

![target.monashsearchreultsopenedrepositoryenvcheck](./cybersecurity_img/Targets/monash/monashsearchreultsopenedrepositoryenvcheck.png) 

  

***Why it didn't ask for GitHub/GitLab Login Credentials ?*** 

  

- To that Navigate to monash index.html file 

	 ![target.monashsearchreultsopenedrepositoryindexhtmlcheck](./cybersecurity_img/Targets/monash/monashsearchreultsopenedrepositoryindexhtmlcheck.png) 

    ![target.monashsearchreultsopenedrepositoryindexhtmlauthasked](./cybersecurity_img/Targets/monash/monashsearchreultsopenedrepositoryindexhtmlauthasked.png) 

:::note
- As the above results show there is authentication Functions from index.html knowing it is in GitLab, with enumeration break the CIA! of monash.edu 
:::
    
:::success
This is Basic Bypass Authentication of monash.edu
:::