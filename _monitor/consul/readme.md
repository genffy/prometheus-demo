## kubernetes 入门 
https://www.youtube.com/watch?v=ubz3cFgxeJA

## Install
参考 [Service Mesh on Minikube](https://developer.hashicorp.com/consul/tutorials/kubernetes/kubernetes-minikube) 或者 [Consul Service Mesh on Kind](https://developer.hashicorp.com/consul/tutorials/kubernetes/kubernetes-kind) 安装 consul 的环境
```shell
brew tap hashicorp/tap
brew install hashicorp/tap/consul-k8s
consul-k8s install -config-file=values.yaml -set global.image=hashicorp/consul:1.14.0

kubectl apply -f counting.yaml && kubectl apply -f dashboard.yaml
```