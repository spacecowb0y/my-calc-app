import { NextApiRequest, NextApiResponse } from "next";

type Operator = "add" | "subtract" | "multiply" | "divide";

/**
 * @swagger
 * /api/calc:
 *  get:
 *   description: Perform a calculation
 *   parameters:
 *   - name: term1
 *     in: query
 *     description: The first term
 *     required: true
 *     schema:
 *        type: number
 *   - name: term2
 *     in: query
 *     description: The first term
 *     required: true
 *     schema:
 *        type: number
 *   - name: operator
 *     in: query
 *     description: The first term
 *     required: true
 *     schema:
 *        type: string
 *        enum: [add, subtract, multiply, divide]
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Retrieve query parameters from the request
  const { term1, term2, operator } = req.query;

  // Parse the term1 and term2 values to numbers
  const num1 = parseFloat(term1 as string);
  const num2 = parseFloat(term2 as string);

  // Check if term1 and term2 are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    res
      .status(400)
      .json({
        error: "Invalid terms. Both term1 and term2 should be numbers.",
      });
    return;
  }

  // Check if the operator is a valid one
  const validOperators: Operator[] = ["add", "subtract", "multiply", "divide"];
  if (!validOperators.includes(operator as Operator)) {
    res
      .status(400)
      .json({
        error: "Invalid operator. Supported operators are +, -, *, and /.",
      });
    return;
  }

  // Perform the calculation based on the operator
  const operators: Record<Operator, (a: number, b: number) => number> = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };

  const operation = operators[operator as Operator];
  const result = operation(num1, num2);

  // Respond with the JSON result
  res.status(200).json({
    term1: num1,
    term2: num2,
    operator,
    result,
  });
}
