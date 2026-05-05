// Lambda notificadora: recibe eventos SNS provenientes de la alarma de CloudWatch
// (que se dispara cuando el filtro de metrica detecta ERRORs en los logs de la
// intranet de Doggie Chic Studio) y los retransmite/loggea para integraciones
// externas (Slack, email, etc.).
const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");

const sns = new SNSClient({});

exports.handler = async (event) => {
  console.log("📣 Doggie Chic alert event:", JSON.stringify(event));
  const records = event?.Records || [];
  for (const r of records) {
    const msg = r?.Sns?.Message || "Alarma de CloudWatch sin mensaje";
    console.log("ALERTA:", msg);
    if (process.env.SNS_TOPIC_ARN) {
      try {
        await sns.send(new PublishCommand({
          TopicArn: process.env.SNS_TOPIC_ARN,
          Subject: "Doggie Chic — alerta procesada",
          Message: `Se detectaron errores en la intranet.\n\n${msg}`,
        }));
      } catch (e) {
        console.error("Error publicando en SNS:", e);
      }
    }
  }
  return { statusCode: 200 };
};
