---
title: A decentralised and open source container registry
---

{% section .hero %}

{% typewriter /%}

> OpenRegistry is an open source and decentralised container registry. Powered by Web3 community, we have been able to build
> project you can rely on.

[View docs](/docs/getting-started) {% .primary %}

{% /section %}

{% section .zines %}
{% side-by-side .hero %}

{% item %}

### Hello there!{% .jumbo %}

> Are you new to OpenRegistry or Container registries in general?
> Do you want to learn more about containers and container registries before proceeding with the documentaion?

> We have the perfect starter documentation with cute little zines check them out
> [here]()

{% /item %}
![Images](/images/zine-docs.svg) {% .img %}
{% /side-by-side %}
{% /section %}

{% section .value-props %}

{% table %}

---

- {% ascii "door" /%}

  {% item %}

  ### Open source {% .jumbo %}

  OpenRegistry is fully open source. Our codebase is public and uses MIT license.
  We are driven by open source community and this is our effort towards giving back.
  {% /item %}

- {% ascii "distributed" /%}

  {% item %}

  ### Decentralised {% .jumbo %}

  One of the most appealing feature of OpenRegistry is it's decentralised nature,
  and our collaborations with various Web3 projects like Akash, IPFS, Filebae, Storj and iExec
  are what make it possible.

  {% /item %}

- {% ascii "globe" /%}

  {% item %}

  ### Reliable and Available {% .jumbo %}

  OpenRegistry is built on the foundation of OSS and Web3 communities. Our promise is to keep our system transparent while maintaining
  the best of our performance.

  {% /item %}

{% /table %}

{% /section %}

{% section .get-started %}

{% side-by-side %}

{% item %}

## Get started {% .jumbo %}

Its super easy to get started with OpenRegistry. OpenRegistry is compliant with OCI confromance specification,
which means the functionality and using CLI with OpenRegistry is just like any other container registry

[Explore documentation](/docs/getting-started) {% .primary %}

{% /item %}

```bash
janedoe:-$ docker login openregidstry.dev

 username: janedoe

 password: ******

Login Suceeded

janedoe:-$ docker tag alpine:latest openregistry.dev/janedoe/alpine:latest

janedoe:-$ docker push openregistry.dev/janedoe/alpine:latest
```

{% /side-by-side %}

{% /section %}

{% section .by-stripe %}

{% side-by-side %}

### A Humble Note {% .jumbo %}

OpneRegistry is built and maintained by 2 developers. We are learning everyday and doing our best to make OpenRegistry the best container registry out there and
we need your support in accomplishing it. If you spot a bug, typo or any other inconsistency across the platform and documentation,
please report it in our [github discussion](https://github.com/containerish/OpenRegistry/discussions/137) or write to @team.openregistry.dev.
We welcome cunstructive criticism too, as it will help us become better. So don't hold back in any case. Lastly, thanks a lot for visiting, we hope you find this documentation informative.

{% /side-by-side %}

{% /section %}
