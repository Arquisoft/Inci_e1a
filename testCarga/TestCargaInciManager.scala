package testCarga

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class TestCargaInciManager extends Simulation {

	val httpProtocol = http
		.baseURL("http://34.214.22.214:8080")
		.inferHtmlResources()
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3")
		.contentTypeHeader("application/x-www-form-urlencoded")
		.userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:59.0) Gecko/20100101 Firefox/59.0")

	val headers_0 = Map("Upgrade-Insecure-Requests" -> "1")

    val uri1 = "http://34.214.22.214:8080/incidence/add"

	val scn = scenario("TestCargaInciManager")
		.exec(http("request_0")
			.post("/incidence/add")
			.headers(headers_0)
			.formParam("nombreAgente", "usuarioJuan")
			.formParam("passwordAgente", "password")
			.formParam("tipoAgente", "Person")
			.formParam("name", "FireRunner")
			.formParam("description", "Se quema un corredor")
			.formParam("etiquetas", "humito")
			.formParam("properties", "temperatura:alta"))

	setUp(scn.inject(rampUsers(50) over(60 seconds))).protocols(httpProtocol)
}