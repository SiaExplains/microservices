# microservices

implementing microservices architecture based on my experiences and best practices.

<hr />

I used these following technologies in this project: <br />
`docker`, `docker-compose`, `node`, `nginx`, `mongodb`

<hr />

Martin Fowler qoute about Microservices:

"is an approach to developing a single application as a set of small services, eaching runnig in its own process and communicating with lightweight mechanism. These services are built around business capabilities and independently deployable by fully automated deployment machinery. There is a bare minimum of centeralized management of these services, which may wrriten in different programming languages and use different data storage technologies."

Characteristics:

-   Application componentization through independent services
-   Services are organized around business capabilities
-   Services communicate through pips (HTTP REST, MQTT)
-   Decentralized governance (CI, SCM, Analytics, Monitoring, etc.)
-   Data Storage & Management is decentralized
-   Infrastructure is automated and often virtualized
-   Services are desgined for failure tolorent and scalability

### Advantanges

-   Architecure should lead to organization of teams, (not in tradiotnal way of technology-specidif teams leading to the architecture)
-   Dynamic Sclaing: we can scale-up or scale down each microservices independently!
-   Different Tech Stack: adapt variety of different techologies
-   Faster Release Cycles: Becuase we develop smaller components (Feature Faster to Market)
-   Easy and Simple Deployments
-   Scale Team up !!!

### Disadvantages

-   Distributed systems are harder to develop (remote calls are slow and always at risk of failure)
-   transactional process and difficult to manage consistency
-   Opertional complexcity: needs a mature team to manage lots of services, which need to deplying regularly

### Patterns, Rules and Standards

-   Make a common libary (like npm libary) for shared entities (like models)
-   Using versioning (/api/v1 | /api/v2) for backward compatiable

### Anti Patterns!

-   Use Microservices in small projects (remove ants with nuclear bomb)
