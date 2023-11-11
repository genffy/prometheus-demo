## [Install](https://developer.hashicorp.com/consul/install)

### Basic ENV
use [OrbStack](https://docs.orbstack.dev/) tool, the default k8s cluster name is orbstack
```shell
kubectl config get-contexts
# CURRENT   NAME       CLUSTER    AUTHINFO   NAMESPACE
# *         orbstack   orbstack   orbstack 
```
### Guide 
[Install Consul on Kubernetes with Helm](https://developer.hashicorp.com/consul/docs/k8s/installation/install)

Get started with [Helm](https://helm.sh/docs/intro/install/) and [install Consul with Helm](https://developer.hashicorp.com/consul/tutorials/kubernetes/kubernetes-deployment-guide#deploy-consul)

```shell
helm repo add hashicorp https://helm.releases.hashicorp.com
helm install --values helm/values.yaml consul hashicorp/consul --create-namespace --namespace consul --version "1.2.0"
# To learn more about the release, run:
#   $ helm status consul --namespace consul
#   $ helm get all consul --namespace consul
#  reload
helm upgrade --values helm/values.yaml consul hashicorp/consul --namespace consul --version "1.2.0"
```

```shell
# consul ui
# TODO run in background
kubectl port-forward service/consul-server --namespace consul 8500:8500
```

```shell
# login
# generate token
export CONSUL_HTTP_TOKEN=$(kubectl get --namespace consul secrets/consul-bootstrap-acl-token --template={{.data.token}} | base64 -d)
echo $CONSUL_HTTP_TOKEN
# eg:
# 135db779-1ec4-6c66-bf72-4d4178aee323
```

### Add Services
Deploy services into your service mesh
```shell
kubectl apply -f ./services/counting.yaml && kubectl apply -f ./services/dashboard.yaml
# open http://localhost:9002/ in browser
kubectl port-forward svc/dashboard --namespace default 9002:9002
```
